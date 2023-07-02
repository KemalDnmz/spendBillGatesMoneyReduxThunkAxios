import { fetchSuccess } from "./moneyActions";
import { fetchError } from "./moneyActions";
import { fetchRequest } from "./moneyActions";
import { fetchCardItems } from "./moneyActions";
import { moneyAction } from "./moneyActions";

export const allActions = {
    moneyAction,
    fetchSuccess,
    fetchError,
    fetchRequest,
    fetchCardItems
}