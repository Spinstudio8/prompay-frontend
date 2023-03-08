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

export function getUsers(currentPage) {
  return http.get(`${apiEndpoint}?pageNumber=${currentPage}`, config);
}

export function getUserById(id) {
  return http.get(apiEndpoint + '/' + id, config);
}

export function adminUpdateUser(user, id) {
  return http.put(
    apiEndpoint + '/' + id,
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      level: user.level,
      isAdmin: user.isAdmin,
    },
    config
  );
}

export function deleteUser(id) {
  return http.delete(apiEndpoint + '/' + id, config);
}

export function resetPassword(email) {
  return http.post(apiEndpoint + '/reset-password', { email }, config);
}

export function getNewPassword(token) {
  return http.get(`${apiEndpoint}/new-password/${token}`);
}

export function setNewPassword(userId, passwordToken, password) {
  return http.post(
    `${apiEndpoint}/new-password`,
    { userId, passwordToken, password },
    config
  );
}
