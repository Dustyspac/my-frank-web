import {create} from 'zustand';

interface CursorState {
  cursorText: string;
  setCursorText: (text: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  cursorText: '', // 초기값은 빈 문자열
  setCursorText: (text) => set({ cursorText: text }),
}));
