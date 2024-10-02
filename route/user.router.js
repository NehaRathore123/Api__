import express from 'express';

const router = express.Router();

import * as usercontroller from '../controller/user.controller.js';

router.post("/save",usercontroller.save);

export default router;