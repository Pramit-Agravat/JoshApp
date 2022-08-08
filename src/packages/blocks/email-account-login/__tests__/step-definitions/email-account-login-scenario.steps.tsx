import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import EmailAccountLoginBlock from "../../src/EmailAccountLoginBlock";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "EmailAccountLoginBlock"
};

const feature = loadFeature(
  "./__tests__/features/email-account-login-scenario.feature"
);

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Phonenumber Log In", ({ given, when, then, and }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("I am a User attempting to Log In with a Phone number", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountLoginBlock {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();
      expect(mobileAccountLogInWrapper).toMatchSnapshot();
    });

    when("I navigate to the Log In Screen", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
    });

    then("I can select Log In with Social Media Account", () => {
      let btnSocialLogin = mobileAccountLogInWrapper.findWhere(
        node => node.prop("testID") === "btnSocialLogin"
      );
      btnSocialLogin.simulate("press");
      instance.goToSocialLogin();
      expect(mobileAccountLogInWrapper).toBeTruthy();
      expect(mobileAccountLogInWrapper).toMatchSnapshot();
    });

    and("I can select the Log In button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        node => node.prop("testID") === "btnPhoneLogIn"
      );
      buttonComponent.simulate("press");
      expect(mobileAccountLogInWrapper).toMatchSnapshot();
    });

    and("I can enter a Phone number with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper.findWhere(
        node => node.prop("testID") === "txtInputPhone"
      );
      textInputComponent.simulate("changeText", "1234567890");
      expect(mobileAccountLogInWrapper).toMatchSnapshot();
    });

    and("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(mobileAccountLogInWrapper).toBeTruthy();
      expect(mobileAccountLogInWrapper).toMatchSnapshot();
    });
  });
});
