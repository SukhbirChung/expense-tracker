import { v4 as uuidv4 } from 'uuid';

export const initialExpenses = [
    {
        id: uuidv4(),
        category: 'Car',
        title: 'Gas',
        amount: 78.65,
        date: '2023-01-01T00:00:00'
    },
    {
        id: uuidv4(),
        category: 'House',
        title: 'Mortgage',
        amount: 3200,
        date: '2023-01-15T00:00:00'
    },
    {
        id: uuidv4(),
        category: 'Groceries',
        title: 'Fortinos',
        amount: 210.48,
        date: '2023-01-21T00:00:00'
    },
    {
        id: uuidv4(),
        category: 'Baby',
        title: 'Diapers',
        amount: 156.08,
        date: '2023-07-18T00:00:00'
    },
    {
        id: uuidv4(),
        category: 'Miscellaneous',
        title: 'Medicine',
        amount: 58.65,
        date: '2024-05-28T00:00:00'
    }
];

export const categories = ['House', 'Groceries', 'Car', 'Phone', 'Clothes', 'Baby', 'Entertainment', 'Miscellaneous'];