import { ProtectedRoute, UnprotectedRoute } from './routes';

export type MainNavigatorParams = {
  [ProtectedRoute]: undefined;
  [UnprotectedRoute]: undefined;
};
