import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
import { UppercaseFirstPipe} from '../../pipes/uppercase-first.pipe'
import { ReverseStringPipe} from '../../pipes/reverse-string.pipe'
import { FilterArrayPipe } from '../../pipes/filter-array.pipe'
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe'
import { SortArrayPipe } from '../../pipes/sort-array.pipe'
import { CurrencyConverterPipe } from '../../pipes/currency-converter.pipe'
import { PhoneNumberFormatterPipe } from '../../pipes/phone-number-formatter.pipe'
import { FileSizePipe } from '../../pipes/file-size.pipe'
import { MarkdownToHtmlPipe } from '../../pipes/markdown-to-html.pipe'
import { TimeAgoPipe } from '../../pipes/time-ago.pipe'
import { PercentChangePipe } from '../../pipes/percent-change.pipe'
import { InitialsPipe } from '../../pipes/initials.pipe'
import { StripHtmlTagsPipe } from '../../pipes/strip-html-tags.pipe'
import { CamelCaseToSpacesPipe } from '../../pipes/camel-case-to-spaces.pipe'
import { TitleCasePipe } from '../../pipes/title-case.pipe'
import { FormsModule } from '@angular/forms'
import { MaskedInputPipe } from '../../pipes/masked-input.pipe'
import { PluralizePipe } from '../../pipes/pluralize.pipe'
import { HumanizeDurationPipe } from '../../pipes/humanize-duration.pipe'
import { JsonPrettyPrintPipe } from '../../pipes/json-pretty-print.pipe'
import { PasswordStrengthPipe } from '../../pipes/password-strength.pipe'
import { OrdinalNumberPipe } from '../../pipes/ordinal-number.pipe'
import { UrlifyPipe } from '../../pipes/urlify.pipe'
import { RelativeTimePipe } from '../../pipes/relative-time.pipe'
import { ArrayShufflePipe } from '../../pipes/array-shuffle.pipe'
import { ColorContrastPipe  } from '../../pipes/color-contrast.pipe'
import { RomanNumeralPipe } from '../../pipes/roman-numeral.pipe'
import { SentenceCasePipe } from '../../pipes/sentence-case.pipe'
import { CsvToArrayPipe } from '../../pipes/csv-to-array.pipe'
import { SlugifyPipe } from '../../pipes/slugify.pipe'
import { RandomPlaceholderImagePipe } from '../../pipes/random-placeholder-image.pipe'
import { PhoneNumberMaskPipe } from '../../pipes/phone-number-mask.pipe'

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule,
            UppercaseFirstPipe,
            ReverseStringPipe,
            FilterArrayPipe,
            TruncateTextPipe,
            SortArrayPipe,
            CurrencyConverterPipe,
            PhoneNumberFormatterPipe,
            FileSizePipe,
            MarkdownToHtmlPipe,
            TimeAgoPipe,
            PercentChangePipe,
            InitialsPipe,
            StripHtmlTagsPipe,
            CamelCaseToSpacesPipe,
            TitleCasePipe,
            FormsModule,
            MaskedInputPipe,
            PluralizePipe,
            HumanizeDurationPipe,
            JsonPrettyPrintPipe,
            PasswordStrengthPipe,
            OrdinalNumberPipe,
            UrlifyPipe,
            RelativeTimePipe,
            ArrayShufflePipe,
            ColorContrastPipe,
            RomanNumeralPipe,
            SentenceCasePipe,
            CsvToArrayPipe,
            SlugifyPipe,
            RandomPlaceholderImagePipe,
            PhoneNumberMaskPipe
            

  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class ExamplesComponent {
  items:Array<any>=[{'name':'DVD','category':'Electronics','price':1},
    {'name':'House','category':'Building','price':2},
    {'name':'Top','category':'Building','price':0}
  ]
  markdownText:string='# Heading level 1'
  someTimestamp:any=Date.now()
  htmlstr='<p>This is <b>HTML</b> text</p>'
  someJsonObject={'id':'99999','creationdate':1987654321}
  item1:Array<number>=[11,22,33,44]



}
