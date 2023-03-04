import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязателен'),
  password: yup.string().required('Пароль обязателен'),
});
