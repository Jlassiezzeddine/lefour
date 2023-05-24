import FormControl from '@mui/material/FormControl';
import { SxProps, Theme } from '@mui/material/styles';
import MUITextField, { TextFieldProps } from '@mui/material/TextField';

const TextInput = ({
  name,
  label,
  helperText,
  placeholder,
  value,
  onChange,
  ...rest
}: TextFieldProps) => {
  const style: SxProps<Theme> = {
    borderRadius: 1,
  };
  return (
    <FormControl fullWidth>
      <MUITextField
        id={name}
        value={value}
        name={name}
        label={label}
        aria-describedby={`${name}-helper-text`}
        placeholder={placeholder}
        InputProps={{
          'aria-label': name,
          sx: style,
        }}
        helperText={helperText}
        variant="outlined"
        onChange={onChange}
        {...rest}
      />
    </FormControl>
  );
};

export default TextInput;
