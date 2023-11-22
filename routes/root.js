import express from "express";
import automationController from "../controller/automationController.js"
const router=express.Router()
router.get('/ping', (req, res) => {
    try {
        // Your code here
        res.send('pong');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/automation/user/:id', automationController)

export default router