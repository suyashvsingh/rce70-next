import { Boilerplate } from '@/types'

const boilerplate: Boilerplate = {
  python: 'print("Hello Python World")',
  javascript: 'console.log("Hello JavaScript World")',
  cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n\n\tcout << "Hello C++ World";\n\n\treturn 0;\n}',
  c: '#include <stdio.h>\n\nint main() {\n\n\tprintf("Hello C World");\n\n\treturn 0;\n}',
  java: 'class Main {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.println("Hello Java World");\n\n\t}\n}',
}
export default boilerplate
