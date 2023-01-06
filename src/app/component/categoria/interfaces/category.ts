export interface Category {
  categorias: [
    {
      _id: string;
      nombre: string;
      usuario: {
        _id: string;
        nombre: string;
      };
    }
  ];
}
