import { create } from 'zustand';
import { Pet } from '../types/petTypes';

interface PetState {
  pets: Pet[];
  addPet: (pet: Pet) => void;
}

export const usePetStore = create<PetState>(set => ({
  pets: [
    {
      id: '1',
      name: 'Bruno',
      breed: 'Husky',
      age: '2',
      price: 5000,
      image: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg',
    },
  ],

  addPet: pet =>
    set(state => ({
      pets: [...state.pets, pet],
    })),
}));
