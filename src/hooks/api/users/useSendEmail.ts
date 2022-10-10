import userService from '../../../services/userService';
import useAsync from '../../useAsync';

export default function useSendEmail() {
  const { act } = useAsync(userService.sendEmailToContributor, false);

  return {
    sendEmail: act,
  };
}
