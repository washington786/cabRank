import { StyleSheet } from "react-native";
import React from "react";
import ScrollWrapper from "../../../globals/ScrollWrapper";
import MainWrapperView from "../../../components/app/MainWrapperView";
import HeaderBack from "../../../components/app/HeaderBack";
import Scroller from "../../../globals/Scroller";
import { Content, MainTitle } from "./TermsOfUse";
import { privacy } from "../../../utils/privacy";


const PrivacyPolicy = () => {
  let title: string = "Privacy And Policies";
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack title={title} />
        <Scroller>
          <MainTitle title={title} />
          {privacy.map((item, index) => {
              const { title, message } = item;
              return (
                <Content
                  title={title}
                  paragraph={message}
                  key_use={index}
                  key={index}
                />
              );
            })}
        </Scroller>
      </MainWrapperView>
    </ScrollWrapper>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
