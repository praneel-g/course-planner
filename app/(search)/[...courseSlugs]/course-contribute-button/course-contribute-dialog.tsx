"use client";

import { Title } from "@/components/title";
import { UniversalLink } from "@/components/universal-link";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { FaCross, FaTimes } from "react-icons/fa";

export function CourseContributeDialog({
  children,
  googleFormUrl,
  githubUrl,
}: {
  children: ReactNode;
  googleFormUrl: string;
  githubUrl: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-40 inset-0 bg-black/50" />
        <Dialog.Content className="fixed z-50 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-white p-5 rounded-xl shadow">
            <Dialog.Close asChild>
              <button className="text-gray-400">
                <FaTimes />
              </button>
            </Dialog.Close>
            <Dialog.Title asChild>
              <Title level={2} className="mb-3">
                Contribute
              </Title>
            </Dialog.Title>
            <Dialog.Description asChild>
              <div className="space-y-2">
                <p>Contribute by filling out a Google Form or editing the course notes on GitHub:</p>
                <p>
                  <ul className="ml-8 list-disc">
                    <li>
                      <UniversalLink href={googleFormUrl} className="underline">
                        Google Form
                      </UniversalLink>
                    </li>
                    <li>
                      <UniversalLink href={githubUrl} className="underline">
                        Course notes on GitHub
                      </UniversalLink>
                    </li>
                  </ul>
                </p>
              </div>
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
