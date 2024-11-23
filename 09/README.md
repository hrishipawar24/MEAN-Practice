1. Create angular application which creates one custom pipe named as MyRev. This custom pipe accept string as a value and display the string reverse format.
Example :
Name = 'Marvellous'; {{Name | MyRev}}
Output of the above statement should be suollevraM
To solve this question please follow all the steps to create Custom pipe.
Inside transform method of pipe write logic to reverse the string.
Consider below code snippet :
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'myRev'})
export class MyRev implements PipeTransform
{
  transform(value: string): string
  {
    // Create new string to hold the reverse string
    let temp: string = ""*;
    // Traverse the string from end and copy the contents in temp.
    return temp;
  }
}


2. Create angular application which creates two custom pipe named as MyAdd & MyMult. MyAdd pipe is used to add two numbers and MyMult is used to multiply two numbers.
Example :
{{8 | MyAdd : 3}} Output should be 11
{{7 | MyMult: 3}} Output should be 21
For this purpose we have to create two separate pipes and inside transform method of each pipe we have to write logic of addition and multiplication respectively.
Consider below code snippet for reference
import { Pipe, PipeTransform } from '@angular/core';
@Pipe (< name: 'MyAdd'
})
export class MyAdd implements PipeTransform
{
transform(value: number, Param: string): number
{
// return addition of value and Param
}
Similarly we can write logic for MyMult pipe also.
