import { parseString } from "xml2js";
import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import wait from "../../utils/wait";
import get from "lodash/get";

const CONTACTED = "CONTACTED";
const to = "rphansen91@gmail.com";
const subject = "Portfolio Contact";
const emailErr = "email is required";
const textErr = "text is required";
const contactUrl = `${process.env.REACT_APP_API_URI}/contact`;

export const sendContact = createAction("SEND_CONTACT");
export const resetContact = createAction("RESET_CONTACT");
export const contact = asyncDelta("contact");
export const selectContact = ({ contact }) => ({ contact });

export const withContact = connect(
  selectContact,
  { sendContact, resetContact }
);

function* sendContactSaga({ payload: { from, text } }) {
  if (!from && !text) {
    yield put(
      contact.setFailure({
        from: emailErr,
        text: textErr
      })
    );
  } else if (!from) {
    yield put(
      contact.setFailure({
        from: emailErr
      })
    );
  } else if (!text) {
    yield put(
      contact.setFailure({
        text: textErr
      })
    );
  } else {
    try {
      yield put(contact.setLoading(true));
      yield put(contact.setFailure(""));
      const res = yield call(() =>
        fetch(contactUrl, {
          method: "POST",
          body: JSON.stringify({
            to: `<${to}>`,
            from: `<${from}>`,
            recaptcha: window.__recaptcha__,
            subject,
            text
          })
        }).then(r => r.json())
      );
      if (res.error) throw new Error(res.error);
      yield put(contact.setSuccess({ contacted: true }));
      yield put(contact.setLoading(false));
    } catch (e) {
      yield put(contact.setFailure(e));
      yield put(contact.setLoading(false));
    }
  }
}

function* persistContacted() {
  localStorage.setItem(CONTACTED, "true");
}

function* unsetContacted() {
  localStorage.removeItem(CONTACTED);
}

export default function* contactSaga() {
  const contacted = localStorage.getItem(CONTACTED);

  if (contacted) yield put(contact.setSuccess({ contacted: true }));

  yield takeEvery(sendContact.type, sendContactSaga);
  yield takeEvery(resetContact.type, unsetContacted);
  yield takeEvery(contact.setSuccess.type, persistContacted);
}
