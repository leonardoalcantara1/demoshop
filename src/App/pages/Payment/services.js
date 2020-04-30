export const payWithCCard = async (body) => fetch('http://localhost:8080/payment', {
  headers: new Headers({
    'content-type': 'application/json',
  }),
  method: 'post',
  body: JSON.stringify(body),
}).then(res => res.json());
