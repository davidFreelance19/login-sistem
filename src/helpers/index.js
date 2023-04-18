export const optionsLg = {
  perPage: 4,
  gap: "1rem",
  type: "loop",
  snap: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1028: {
      perPage: 2,
    },
    1280: {
      perPage: 3,
    },
    1440: {
      perPage: 3,
    },
    478: {
      perPage: 1,
    },
  },
};
export const optionsNormal = {
  perPage: 6,
  gap: "1rem",
  type: "loop",
  snap: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1028: {
      perPage: 3,
      gap: ".8rem",
    },
    1280: {
      perPage: 4,
      gap: ".8rem",
    },
    1440: {
      perPage: 5,
    },
    478: {
      perPage: 1,
      gap: "2rem",
    },
  },
};
export const optionsCast = {
  perPage: 7,
  gap: "1rem",
  type: "loop",
  snap: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1028: {
      perPage: 5,
      gap: ".8rem",
    },
    1280: {
      perPage: 4,
      gap: ".8rem",
    },
    1440: {
      perPage: 6,
    },
    478: {
      perPage: 1,
      gap: "2rem",
    },
  },
};
export const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("en-EN", opciones);
};
