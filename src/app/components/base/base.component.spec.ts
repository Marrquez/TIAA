import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the base component!');
  });
});
