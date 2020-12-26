import createIncreaseCountNumber from "./increaseNumber";
import createDecreaseCountNumber from "./decreaseNumber";
import {countVar} from "../../cache";

export const countMutations = {
  countIncrease : createIncreaseCountNumber(countVar), 
  countDecrease : createDecreaseCountNumber(countVar)
}