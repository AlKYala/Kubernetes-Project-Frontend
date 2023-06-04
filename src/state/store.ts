import create from 'zustand';
import { ExampleModel, ExampleModelControllerApi } from '../api';

type State = {
  items: ExampleModel[];
  addItem: (item: ExampleModel) => void;
  fetchItems: () => void;
};

const api : ExampleModelControllerApi = new ExampleModelControllerApi();

export const useStore = create<State>((set, get) => ({
  items: [],
  addItem: async (item: ExampleModel) => {
    await api.create(item);
  },
  async fetchItems() {
    const response = await api.findAll();

    //const response = [{"id":"bla","name":"blaName","email":"EmailBla","phone":"phone"}]
    //set({items: [... response]});


    set({items: [... response.data]});
  }
}));