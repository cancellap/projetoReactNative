export type PropsStack = {
  StackInstituicao: { nome: string; id: number };
  StackLogin: undefined;
  StackHome: undefined;
  StackCadastro: undefined;
};

export type PropsTabs = {
  TabsHome: undefined;
  TabSearch: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PropsStack {}
    interface RootParamList extends PropsTabs {}
  }
}
