export type PropsStack = {
  StackInstituicao: { nome: string; id: number };
  StackLogin: undefined;
  StackHome: undefined;
};

export type PropsTabs = {
  TabsHome: undefined;
  TabSearch: undefined;
  TabCadastro: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PropsStack {}
    interface RootParamList extends PropsTabs {}
  }
}
