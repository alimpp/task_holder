import { useToast } from "vue-toastification";
const Toast = useToast();

export const SuccessNotification = (timeout: number, text: string, position: any) => {
  Toast.success(text, {
    timeout: timeout,
    position: position,
  });
}

export const InfoNotification = (timeout: number, text: string, position: any) => {
  Toast.info(text, {
    timeout: timeout,
    position: position,
  });
}

export const WarningNotification = (timeout: number, text: string, position: any) => {
  Toast.warning(text, {
    timeout: timeout,
    position: position,
  });
}

export const ErrorNotification = (timeout: number, text: string, position: any) => {
  Toast.error(text, {
    timeout: timeout,
    position: position,
  });
}