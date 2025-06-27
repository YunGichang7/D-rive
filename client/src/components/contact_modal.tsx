import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendToSlack } from "@/lib/sendToSlack";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
  initialReason?: string;
}

export default function ContactModal({
  show,
  onClose,
  initialReason = "문의하기",
}: ContactModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reason: initialReason,
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, reason: initialReason }));
  }, [initialReason]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendToSlack(formData);
    toast({
      title: "문의가 접수되었습니다",
      description: "빠른 시일 내에 연락드리겠습니다.",
    });
    onClose();
    setFormData({
      reason: initialReason,
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <Dialog
      open={show}
      onClose={onClose}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="relative bg-white rounded-lg shadow-lg w-full max-w-xl z-50 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="reason"
                className="mb-1 block text-sm font-semibold text-[var(--drive-dark)]"
              >
                문의 종류
              </Label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full border-gray-200 border-2 rounded-md px-3 py-2 text-base focus:border-[var(--drive-primary)]"
              >
                <option value="문의하기">문의하기</option>
                <option value="고객 지원">고객 지원</option>
                <option value="기술 문의">기술 문의</option>
                <option value="파트너십">파트너십</option>
                <option value="투자 문의">투자 문의</option>
              </select>
            </div>
            <div>
              <Label
                htmlFor="name"
                className="mb-1 block text-sm font-semibold text-[var(--drive-dark)]"
              >
                이름
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="mb-1 block text-sm font-semibold text-[var(--drive-dark)]"
              >
                이메일
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div>
              <Label
                htmlFor="company"
                className="mb-1 block text-sm font-semibold text-[var(--drive-dark)]"
              >
                회사명
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="회사명을 입력해주세요"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="mb-1 block text-sm font-semibold text-[var(--drive-dark)]"
              >
                문의 내용
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요"
                rows={4}
              />
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 eco-gradient text-white text-lg font-semibold"
              >
                문의 보내기
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
