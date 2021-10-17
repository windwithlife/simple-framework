
import { enquireScreen } from 'enquire-js';

let isMobileScreen;
enquireScreen((b) => {
  isMobileScreen = b;
});

function isMobile(){
   return isMobileScreen;
}

export {isMobile};
