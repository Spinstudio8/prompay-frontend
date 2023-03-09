import http from './httpService';

const apiEndpoint = '/users';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer `,
  },
};

export function signup(user) {
  return http.post(
    apiEndpoint + '/signup',
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      birthDay: user.birthDay,
      gender: user.gender,
      password: user.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function resendVerificationCode(email) {
  return http.post(
    apiEndpoint + '/resend-verification-code',
    {
      email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function verifyCode(data) {
  return http.post(
    apiEndpoint + '/verify-code',
    {
      email: data.email,
      verificationCode: data.verificationCode,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function getUserDashboard(id, token) {
  return http.get(`${apiEndpoint}/${id}/dashboard`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getUserWallet(id, token) {
  return http.get(`${apiEndpoint}/${id}/wallet`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getUserProfile(id, token) {
  return http.get(`${apiEndpoint}/${id}/profile`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateUserProfile(data, id, token) {
  return http.patch(
    `${apiEndpoint}/${id}/profile`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      location: data.location,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function adminUpdateUser(data, id, token) {
  return http.patch(
    `${apiEndpoint}/${id}`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      location: data.location,
      role: data.role,
      isAdmin: data.isAdmin,
      hasAuthority: data.hasAuthority,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function getUsers(token) {
  return http.get(`${apiEndpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getUserById(id) {
  return http.get(apiEndpoint + '/' + id, config);
}

export function deleteUser(id) {
  return http.delete(apiEndpoint + '/' + id, config);
}

export function resetPassword(email) {
  return http.post(
    apiEndpoint + '/reset-password',
    { email },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function verifyPasswordToken(passwordToken) {
  return http.get(`${apiEndpoint}/verify-password-token/${passwordToken}`);
}

export function setNewPassword(userId, passwordToken, password) {
  return http.post(
    `${apiEndpoint}/new-password`,
    { userId, passwordToken, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
