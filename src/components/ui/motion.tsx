import {motion} from "motion/react" 
import { Button } from "./button";
import { DialogClose,DialogTrigger } from "./dialog";
import { Card } from "./card";

export const MotionButton = motion.create(Button)
export const MotionDialogClose = motion.create(DialogClose)
export const MotionDialogTrigger = motion.create(DialogTrigger)
export const MotionCard = motion.create(Card)