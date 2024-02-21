const { Router } = require('express');
const routes = Router();
const {Account} = require('../db.js');
const {AuthMiddleWare} = require('../middleware');
const mongoose = require('mongoose');

routes.get("/balance", AuthMiddleWare, async (req, res) => {
    try {
        console.log(req.userId);
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }
        res.json({ balance: account.balance });
    } catch (error) {
        res.status(500).json({ message:error.message });
    }
});

routes.post('/transfer', AuthMiddleWare, async (req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const { amount, to } = req.body; // Assuming you're passing these in the body
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: "Invalid transaction" });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: "Recipient account not found" });
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Internal server error" });
    } finally {
        session.endSession();
    }
});

module.exports = routes;
