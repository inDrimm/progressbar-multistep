import * as React from "react";
import Layout from "../Layout";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResumeData } from "./content/resumeData";
import { LihatDokumen } from "./content/lihatDokumen";
import { Account } from "./content/account";

const stepPages = [ResumeData, LihatDokumen, Account];

export default function App() {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    { label: "Resume Data", isValid: undefined },
    { label: "Lihat Dokumen", isValid: undefined },
    { label: "Account", isValid: undefined },
    { label: "Account", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid = steps.slice(0, step).findIndex((currentStep) => currentStep.isValid === false) === -1;

  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));

      setSteps(currentSteps);
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep && isPreviousStepsValid && isValid) {
        alert(JSON.stringify(values));
      }
    },
    [step, steps, setSteps, setStep, setFormState, isLastStep, isPreviousStepsValid]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Header style={{ textAlign: "center", marginTop: "15px" }}>
          <a href="https://www.telerik.com/kendo-react-ui/components/form/multi-step-form/" target="_blank">
            <button className="btn btn-primary">Source</button>
          </a>
        </Card.Header>
        <Stepper value={step} items={steps} />
        <Form
          initialValues={formState}
          onSubmitClick={onStepSubmit}
          render={(formRenderProps) => (
            <div style={{ alignSelf: "center" }}>
              <FormElement style={{ width: 1116 }}>
                {stepPages[step]}
                <span style={{ marginTop: "40px" }} className={"k-form-separator"} />
                <div
                  style={{
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                  className={"k-form-buttons k-buttons-end"}
                >
                  <span style={{ alignSelf: "center" }}>Langkah {step + 1} dari 3</span>
                  <div>
                    {step !== 0 ? (
                      <Button style={{ marginRight: "16px" }} onClick={onPrevClick}>
                        Kembali
                      </Button>
                    ) : undefined}
                    <Button className="btn-next" disabled={isLastStep ? !isPreviousStepsValid : false} onClick={formRenderProps.onSubmit}>
                      {isLastStep ? "Submit" : "Selanjutnya"}
                    </Button>
                  </div>
                </div>
              </FormElement>
            </div>
          )}
        />
      </div>
    </Layout>
  );
}
