import { WatchesModule } from './watches.module';

describe('WatchesModule', () => {
  let watchesModule: WatchesModule;

  beforeEach(() => {
    watchesModule = new WatchesModule();
  });

  it('should create an instance', () => {
    expect(watchesModule).toBeTruthy();
  });
});
