import { ProtectedRoute } from '@screens/routes';
import {
  CardOptionsScreenRoute,
  CardsScreenRoute,
  ProfileSettingsScreenRoute,
} from './routes';

export type ProtectedNavigatorParams = {
  [ProfileSettingsScreenRoute]: undefined;
  [CardsScreenRoute]: undefined;
  [CardOptionsScreenRoute]: undefined;
  [ProtectedRoute]: undefined;
};
