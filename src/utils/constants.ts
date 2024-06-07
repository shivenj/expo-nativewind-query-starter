const emailAddressRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


export const validationRules = {
    email: {
      required: "Email is required",
      pattern: {
        value: emailAddressRegex,
        message: "Please enter a valid email address",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
};

export const URLS = {
    login: '/login',
    signup: '/signup'
}