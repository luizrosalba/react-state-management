import { take, takeLatest, call, all } from "redux-saga/effects";

/// existem vários , take every ... 
import { ActionTypes } from "./Actions";

/// funcao generator, exscuta até receber yield
function* Saga() {
  /// quando ouvir uma ação checkout executa checkoutFlow
  
  yield takeLatest(ActionTypes.CHECKOUT, checkoutFlow);
  /// só captura a ultima ação , se clicar 10 vezes só a ultima chega no saga 
}

//// recebe a action ou seu payload 
function* checkoutFlow({ payload }) {
  while (true) {
    yield call(() => console.log("checkPaymentMethod"));

    yield take("CONFIRM_CHECKOUT");

    yield call(() => console.log("billingService"));

    /// rodando em paralelo 
    yield all([
      call(() => console.log("sendConfirmationEmail")),
      call(() => console.log("removeItemFromStock"))
    ]);
  }
}

export default Saga;
