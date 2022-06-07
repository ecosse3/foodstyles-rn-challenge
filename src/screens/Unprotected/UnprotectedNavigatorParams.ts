import { UnprotectedRoute } from '@screens/routes';
import { SignInOptionsRoute, SignInRoute, SignUpEmailRoute } from './routes';

export type UnprotectedNavigatorParams = {
  [SignInOptionsRoute]: undefined;
  [SignInRoute]: undefined;
  [SignUpEmailRoute]: undefined;
  [UnprotectedRoute]: undefined;
};
