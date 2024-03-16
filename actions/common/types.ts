export interface FormState<T> {
  clientStatus?: {
    errors?: {
      [K in keyof T]?: string[];
    };
    message?: string | null;
  };
  serverStatus?: {
    message: string;
    status: number;
    result: any;
  };
}
