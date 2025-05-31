import { Alert, Button, Text, TextInput, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import LoginButton from "./LoginButton";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username must be at most 50 characters long")
    .required("Username is required"),

  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    )
    .required("Password is required"),
});

interface InitialValueTypes {
  username: string;
  password: string;
}
const initialValues: InitialValueTypes = {
  username: "",
  password: "",
};
const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: InitialValueTypes) => {
      console.log(values);
      Alert.alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <View className="flex-col gap-4 p-5">
      <TextInput
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        value={formik.values.username}
        placeholder="Username"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      {formik.touched.username && formik.errors.username && (
        <Text className="text-sm font-light text-red-500">
          {formik.errors.username}
        </Text>
      )}

      <TextInput
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        placeholder="Password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        secureTextEntry={true}
      />
      {formik.touched.password && formik.errors.password && (
        <Text className="text-sm font-light text-red-500">
          {formik.errors.password}
        </Text>
      )}
      <LoginButton onPress={() => formik.handleSubmit()}/>
    </View>
  );
};

export default Login;
