import { useState } from "react";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-next f-right"
          type="button"
          onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
        >
          下一步
        </button>
      );
    }
  };

  const prevButton = () => {
    if (currentStep > 1) {
      return (
        <button
          className="btn btn-previous"
          type="button"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
        >
          上一步
        </button>
      );
    }
  };

  return (
    <>
      <div className="container">
        <h1>表单</h1>
        <p>步骤 {currentStep} </p>

        <form>
          <Step1 currentStep={currentStep} />
          <Step2 currentStep={currentStep} />
          <Step3 currentStep={currentStep} />
          {nextButton()}
          {prevButton()}
        </form>
      </div>
    </>
  );
}

function Step1(prop) {
  if (prop.currentStep != 1) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="email">邮箱地址</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="输入邮箱地址"
      ></input>
    </div>
  );
}

function Step2(prop) {
  if (prop.currentStep != 2) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="username">用户名</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="输入用户名"
      ></input>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep != 3) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="password">密码</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="输入密码"
        value={props.password}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default App;
