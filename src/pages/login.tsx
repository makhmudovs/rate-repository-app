import theme from "@/theme";
import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
// Explanation:
// - At least 1 lowercase letter
// - At least 1 uppercase letter
// - At least 1 number
// - At least 1 special character
// - Minimum 8 characters

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

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      Alert.alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username &&
            styles.inputError,
        ]}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        value={formik.values.username}
        placeholder="Username"
      />

      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red", padding: 10 }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password &&
            styles.inputError,
        ]}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        secureTextEntry={true}
        placeholder="Password"
      />

      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red", padding: 10 }}>
          {formik.errors.password}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => formik.handleSubmit()}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 5,
    fontSize: theme.fontSizes.heading,
    borderColor: theme.colors.textSecondary,
  },
  inputError: {
    borderColor: "red",
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    margin: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: theme.fontSizes.heading,
    padding: 12,
    color: theme.colors.textWhite,
  },
});
