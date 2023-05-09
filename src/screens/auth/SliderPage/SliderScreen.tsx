import React, { useState } from "react";
import ScrollWrapper from "../../../globals/ScrollWrapper";
import SliderCurve from "../../../components/auth/SliderCurve";
import SliderContent from "../../../components/auth/SliderContent";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ForgotPassword/ResetPassword";

const SliderScreen = () => {
  const [isActive, setActive] = useState<boolean>(true);
  const [signUpActive, setSignUpActive] = useState<boolean>(false);
  const [resetActive, setResetActive] = useState<boolean>(false);

  const onHandleSignUp = (): void => {
    setActive(false);
    setSignUpActive(true);
    setResetActive(false);
  };

  const onHandleResetPassword = (): void => {
    setActive(false);
    setSignUpActive(false);
    setResetActive(true);
  };

  const onHandleGoBack = (): void => {
    setActive(true);
    setSignUpActive(false);
    setResetActive(false);
  };

  const onHandleGoRegSignIn = (): void => {
    setActive(true);
    setSignUpActive(false);
    setResetActive(false);
  };

  return (
    <ScrollWrapper>
      <SliderCurve customHeight={isActive ? 0.35 : 0.3}>
        <SliderContent>
          {signUpActive && <Register onSignInHandler={onHandleGoRegSignIn} />}
          {isActive && (
            <Login
              onSignUpHandler={onHandleSignUp}
              onPasswordBtnhandler={onHandleResetPassword}
            />
          )}
          {resetActive && (
            <ResetPassword onSignInHandler={onHandleGoBack} />
          )}
        </SliderContent>
      </SliderCurve>
    </ScrollWrapper>
  );
};

export default React.memo(SliderScreen);
