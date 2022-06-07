import React from 'react';
import {
  AccessibilityRole,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
  View,
} from 'react-native';

import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UnpackNestedValue,
  UseFormSetValue,
} from 'react-hook-form';

import { theme } from '@theme';
import Typography from '@components/Typography';
import FONTS from '@theme/fonts';
import COLORS from '@theme/colors';
import styles from './styles';
import { Mode } from './types';

interface Props<TFieldValues> {
  accessibilityRole?: AccessibilityRole;
  control: Control<TFieldValues>;
  error?: FieldError;
  hint?: string;
  mode?: Mode;
  isDisabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  name: Path<TFieldValues>;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  secureTextEntry?: boolean;
  setValue?: UseFormSetValue<TFieldValues>;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

const FormController = <TFieldValues extends FieldValues>({
  accessibilityRole,
  control,
  error,
  hint = '',
  mode = 'dark',
  isDisabled = false,
  keyboardType,
  label,
  name,
  onSubmit = () => {},
  secureTextEntry = false,
  setValue,
  style,
  testID,
}: Props<TFieldValues>) => {
  const onTrimAll = (
    value: UnpackNestedValue<PathValue<TFieldValues, Path<TFieldValues>>>,
  ): void => {
    if (!setValue) return;
    setValue(name, value.replace(/\s+/g, ' ').trim());
  };

  const outlineColor = (): string =>
    error ? theme.colors.orangeRed : theme.colors.greyishBrown;

  const onTrimEnd = (value: string): string =>
    name === 'email' ? value.trimEnd() : value;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => (
        <View>
          {label && (
            <Typography
              fontFamily={FONTS.semibold}
              fontWeight="medium2"
              color={mode === 'light' ? COLORS.greyishBrown : COLORS.white}
              mt={13}
              mb={7}>
              {label} <Typography>{hint}</Typography>
            </Typography>
          )}
          <TextInput
            accessibilityRole={accessibilityRole}
            accessibilityLabel={`${label}`}
            autoCapitalize={name === 'email' ? 'none' : undefined}
            secureTextEntry={secureTextEntry}
            allowFontScaling={false}
            value={value}
            onChangeText={(text) => {
              onChange(onTrimEnd(text));
            }}
            onBlur={() => {
              onBlur();
              onTrimAll(value);
            }}
            onSubmitEditing={onSubmit}
            style={[
              styles({ mode }).contentBackground,
              styles({ secureTextEntry }).text,
              style,
            ]}
            keyboardType={keyboardType}
            testID={testID}
            editable={!isDisabled}
          />
        </View>
      )}
    />
  );
};

export default FormController;
