import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config.js");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}
interface S {
  // Customizable Area Start
  dashboardData: any;
  token: string;
  errorMsg: string;
  loading: boolean;
  // Customizable Area End
}
interface SS {
  id: any;
}

export default class DashboardController extends BlockComponent<Props, S, SS> {
  apiDashboardItemCallId: string = "";
  dashboardApiCallId: string = "";
  apiGetQueryStrinurl: string = "";

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    console.disableYellowBox = true;
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage)
    ];

    this.state = {
      dashboardData: [],
      errorMsg: "",
      token: "",
      loading: false
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    console.log("componentDidMount...");
    var authTokenReq = new Message(getName(MessageEnum.SessionRequestMessage));
    this.send(authTokenReq);
  }

  getDashboardData(): boolean {
    // Customizable Area Start
    const header = {
      "Content-Type": configJSON.dashboarContentType,
      token: this.state.token
    };
    console.log("header  ", JSON.stringify(header));
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    console.log("requestMessage, ", requestMessage);
    this.apiDashboardItemCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.dashboardGetUrl
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.dashboarApiMethodType
    );
    //console.log('requestMessage@, ',requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
    // Customizable Area End
    return true;
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    console.log("receive...");
    //runEngine.debugLog("Message Recived", message);
    if (getName(MessageEnum.SessionResponseMessage) === message.id) {
      //runEngine.debugLog("Message Recived", message);
      let token = message.getData(getName(MessageEnum.SessionResponseToken));
      this.setState({ token: token, loading: true }, () => {
        this.getDashboardData();
      });
    }

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (responseJson && !responseJson.errors && responseJson.data) {
        console.log("responseJson  Dashboard ", JSON.stringify(responseJson));
        if (responseJson.data.length === 0) {
          this.setState({
            errorMsg: "Data Not Found",
            loading: false
          });
        } else {
          this.setState({
            dashboardData: responseJson.data,
            errorMsg: "",
            loading: false
          });
        }
      } else {
        var errorReponse = message.getData(
          getName(MessageEnum.RestAPIResponceErrorMessage)
        );
        console.log("error resp", errorReponse);
        if (errorReponse === undefined) {
          this.setState({
            errorMsg: "Something went wrong",
            loading: false
          });
        } else {
          this.setState({
            errorMsg: errorReponse,
            loading: false
          });
        }
      }
    }
  }
  // Customizable Area Start
  // Customizable Area End
}
