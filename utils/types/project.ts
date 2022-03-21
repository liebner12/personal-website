import { Dispatch, SetStateAction } from 'react';

export type SelectedPage = 'About me' | 'Projects' | 'Contact';

export interface MainContextInterface {
  selectedPage: SelectedPage;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>> | (() => void);
}
