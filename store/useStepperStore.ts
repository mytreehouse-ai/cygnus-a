import { create } from "zustand";

enum StepStatus {
  Current = "current",
  Complete = "complete",
  Upcoming = "upcoming",
}

interface StepValue {
  id: string;
  name: string;
  status: StepStatus;
}

interface StepperState {
  steps: StepValue[];
  currentStepIndex: number;
}

type StepperActions = {
  setCurrentStepIndex: (index: number) => void;
  markStepAsComplete: (id: string) => void;
  resetSteps: () => void;
};

const initialSteps: StepValue[] = [
  { id: "Step 1", name: "Property", status: StepStatus.Current },
  { id: "Step 2", name: "Personal", status: StepStatus.Upcoming },
  { id: "Step 3", name: "Results", status: StepStatus.Upcoming },
];

const initialState: StepperState = {
  steps: initialSteps,
  currentStepIndex: 0,
};

const updateStepStatusBasedOnIndex = (
  step: StepValue,
  index: number,
  currentIndex: number,
): StepValue => {
  if (index === currentIndex) {
    return { ...step, status: StepStatus.Current };
  } else if (index < currentIndex) {
    return { ...step, status: StepStatus.Complete };
  } else {
    return { ...step, status: StepStatus.Upcoming };
  }
};

const ValuationStepper = create<StepperState & StepperActions>((set) => ({
  ...initialState,
  setCurrentStepIndex: (index: number) => {
    set((state) => ({
      ...state,
      currentStepIndex: index,
      steps: state.steps.map((step, i) =>
        updateStepStatusBasedOnIndex(step, i, index),
      ),
    }));
  },
  markStepAsComplete: (id: string) => {
    set((state) => ({
      ...state,
      steps: state.steps.map((step) =>
        step.id === id ? { ...step, status: StepStatus.Complete } : step,
      ),
    }));
  },
  resetSteps: () => {
    set(() => ({
      ...initialState,
    }));
  },
}));

export default ValuationStepper;
