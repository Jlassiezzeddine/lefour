import FormControl from '@mui/material/FormControl';
import { SxProps, Theme } from '@mui/material/styles';
import MUITextField, { TextFieldProps } from '@mui/material/TextField';

const PhoneInput = ({
  name,
  label,
  helperText,
  value,
  onChange,
  ...props
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
        variant="outlined"
        aria-describedby={`${name}-helper-text`}
        InputProps={{
          'aria-label': name,
          sx: style,
        }}
        helperText={helperText}
        onChange={onChange}
        sx={{ borderRadius: 12 }}
        {...props}
      />
    </FormControl>
  );
};

export default PhoneInput;
