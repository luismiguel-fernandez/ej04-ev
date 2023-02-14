import { PipeNombrePipe } from './pipe-nombre.pipe';

describe('PipeNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeNombrePipe();
    expect(pipe).toBeTruthy();
  });
});
