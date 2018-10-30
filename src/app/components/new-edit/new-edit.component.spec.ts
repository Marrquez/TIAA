import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewEditComponent } from './new-edit.component';

describe('NewEditComponent', () => {
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(NewEditComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the new/edit component!');
  });
});
