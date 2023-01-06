
const serverAddress = 'http://localhost:3000';


const deleteRichPeople = async (id) => {
  const response = await fetch(`${serverAddress}/richPeople/${id}`, {
    method: 'DELETE'
  });
  const richPeople = await response.json();
  
  return richPeople;
}
const getRichPeople = async () => {
  const response = await fetch(`${serverAddress}/richPeople`);
  const richPeople = await response.json();

  return richPeople;
}

const createRichPeople = async (richy) => {
  const response = await fetch(`${serverAddress}/richPeople`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(richy)
  });
  const richPeople = await response.json();

  return richPeople;
}

const updateRichPeople = async (id, richy) => {
  const response = await fetch(`${serverAddress}/richPeople/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(richy)
  });
  const richPeople = await response.json();

  return richPeople;
}

const ApiService = {
  getRichPeople,
  deleteRichPeople,
  createRichPeople,
  updateRichPeople,
};

export default ApiService;