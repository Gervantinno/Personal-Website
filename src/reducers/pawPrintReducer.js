const initialState = {
  isPrintingOn: window.innerWidth > 900 ? true : false,
};

const TURN_PRINTING_OFF = "TURN_PRINTING_OFF";
const TURN_PRINTING_ON = "TURN_PRINTING_ON";

export const pawPringReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_PRINTING_OFF: {
      return { ...state, isPrintingOn: false };
    }

    case TURN_PRINTING_ON: {
      return { ...state, isPrintingOn: true };
    }

    default: {
      return state;
    }
  }
};

export const turnPawPrintingOff = {
  type: TURN_PRINTING_OFF,
};

export const turnPawPrintingOn = {
  type: TURN_PRINTING_ON,
};
