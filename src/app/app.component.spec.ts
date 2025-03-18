import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';  // Assuming the ReversePipe is in the same directory

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let datePipe: DatePipe;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, ReversePipe],  // Declare the component and pipe
            providers: [DatePipe],  // Provide DatePipe here
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        datePipe = TestBed.inject(DatePipe);  // Inject DatePipe
        fixture.detectChanges();  // Trigger change detection
    });

    describe('boundary', () => {
        it('should create the AppComponent', () => {
            expect(component).toBeTruthy();
        });

        it('should format the current date using DatePipe', () => {
            // Format the currentDate in the same way as the template
            const formattedDate = datePipe.transform(component.currentDate, 'fullDate');
            const dateElement = fixture.nativeElement.querySelector('p');

            // Check if the formatted date is correctly displayed in the <p> tag
            expect(dateElement.textContent).toContain(formattedDate);
        });

        it('should reverse the string using ReversePipe', () => {
            const reversedString = fixture.nativeElement.querySelectorAll('p')[1].textContent;
            // The reversed string should be '!ralugnA ,olleH'
            expect(reversedString).toBe('Reversed String: !ralugnA ,olleH');
        });
    });
});
